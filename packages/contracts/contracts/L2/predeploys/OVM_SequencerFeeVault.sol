// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/* Library Imports */
import { Lib_PredeployAddresses } from "../../libraries/constants/Lib_PredeployAddresses.sol";

/* Contract Imports */
import { L2StandardBridge } from "../messaging/L2StandardBridge.sol";

/**
 * @title OVM_SequencerFeeVault
 * @dev Simple holding contract for fees paid to the Sequencer. Likely to be replaced in the future
 * but "good enough for now".
 */
contract OVM_SequencerFeeVault {
    /*************
     * Constants *
     *************/

    // Minimum ETH balance that can be withdrawn in a single withdrawal.
    uint256 public constant MIN_WITHDRAWAL_AMOUNT = 15 ether;

    /*************
     * Variables *
     *************/

    // Address on L1 that will hold the fees once withdrawn. Dynamically initialized within l2geth.
    address public l1FeeWallet;

    // Address on L2 that can make withdrawals
    address public owner;
    address public newOwner;

    /***************
     * Constructor *
     ***************/

    /**
     * @param _l1FeeWallet Initial address for the L1 wallet that will hold fees once withdrawn.
     * Currently HAS NO EFFECT in production because l2geth will mutate this storage slot during
     * the genesis block. This is ONLY for testing purposes.
     */
    constructor(address _l1FeeWallet) {
        l1FeeWallet = _l1FeeWallet;
        owner = _l1FeeWallet;
    }

    /************
     * Fallback *
     ************/

    // slither-disable-next-line locked-ether
    receive() external payable {}

    /********************
     * Public Functions *
     ********************/

    // slither-disable-next-line external-function
    function withdraw() public onlyOwner {
        require(
            address(this).balance >= MIN_WITHDRAWAL_AMOUNT,
            // solhint-disable-next-line max-line-length
            "OVM_SequencerFeeVault: withdrawal amount must be greater than minimum withdrawal amount"
        );

        L2StandardBridge(Lib_PredeployAddresses.L2_STANDARD_BRIDGE).withdrawTo(
            Lib_PredeployAddresses.OVM_GCD,
            l1FeeWallet,
            address(this).balance,
            0,
            bytes("")
        );
    }

    function send(address payable to, uint256 amount) public onlyOwner {
        (bool sent, ) = to.call{value: amount}("");
        require(sent, "OVM_SequencerFeeVault: failed to send GCD");
    }

    /*************
     * Ownership *
     *************/

    function updateFeeWallet(address _newWallet) public onlyOwner {
        emit FeeWalletUpdated(l1FeeWallet, _newWallet);
        l1FeeWallet = _newWallet;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        emit OwnershipTransferRequested(owner, _newOwner);
        newOwner = _newOwner;
    }

    function claimOwnership() public {
        require(msg.sender == newOwner, "Claim from wrong address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        newOwner = address(0);
    }

    /**********
     * Events *
     **********/

    event FeeWalletUpdated(
        address indexed oldWallet,
        address indexed newWallet
    );

    event OwnershipTransferRequested(
        address indexed oldOwner,
        address indexed newOwner
    );

    event OwnershipTransferred(
        address indexed oldOwner,
        address indexed newOwner
    );

    /*************
     * Modifiers *
     *************/
    modifier onlyOwner {
        require(msg.sender == owner, "OVM_SequencerFeeVault: only owner");
        _;
    }
}
