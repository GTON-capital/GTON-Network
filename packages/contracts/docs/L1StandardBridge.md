# L1StandardBridge



> L1StandardBridge



*The L1 GCD and ERC20 Bridge is a contract which stores deposited L1 funds and standard tokens that are in use on L2. It synchronizes a corresponding L2 Bridge, informing it of deposits and listening to it for newly finalized withdrawals.*

## Methods

### depositERC20

```solidity
function depositERC20(address _l1Token, address _l2Token, uint256 _amount, uint32 _l2Gas, bytes _data) external nonpayable
```



*deposit an amount of the ERC20 to the caller&#39;s balance on L2.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1Token | address | Address of the L1 ERC20 we are depositing
| _l2Token | address | Address of the L1 respective L2 ERC20
| _amount | uint256 | Amount of the ERC20 to deposit
| _l2Gas | uint32 | Gas limit required to complete the deposit on L2.
| _data | bytes | Optional data to forward to L2. This data is provided        solely as a convenience for external contracts. Aside from enforcing a maximum        length, these contracts provide no guarantees about its content.

### depositERC20To

```solidity
function depositERC20To(address _l1Token, address _l2Token, address _to, uint256 _amount, uint32 _l2Gas, bytes _data) external nonpayable
```



*deposit an amount of ERC20 to a recipient&#39;s balance on L2.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1Token | address | Address of the L1 ERC20 we are depositing
| _l2Token | address | Address of the L1 respective L2 ERC20
| _to | address | L2 address to credit the withdrawal to.
| _amount | uint256 | Amount of the ERC20 to deposit.
| _l2Gas | uint32 | Gas limit required to complete the deposit on L2.
| _data | bytes | Optional data to forward to L2. This data is provided        solely as a convenience for external contracts. Aside from enforcing a maximum        length, these contracts provide no guarantees about its content.

### depositGCD

```solidity
function depositGCD(uint256 _amount, uint32 _l2Gas, bytes _data) external nonpayable
```



*Deposit an amount of the ETH to the caller&#39;s balance on L2.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _amount | uint256 | Amount of the GCD to deposit.
| _l2Gas | uint32 | Gas limit required to complete the deposit on L2.
| _data | bytes | Optional data to forward to L2. This data is provided        solely as a convenience for external contracts. Aside from enforcing a maximum        length, these contracts provide no guarantees about its content.

### depositGCDTo

```solidity
function depositGCDTo(address _to, uint256 _amount, uint32 _l2Gas, bytes _data) external nonpayable
```



*Deposit an amount of ETH to a recipient&#39;s balance on L2.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _to | address | L2 address to credit the withdrawal to.
| _amount | uint256 | Amount of the GCD to deposit.
| _l2Gas | uint32 | Gas limit required to complete the deposit on L2.
| _data | bytes | Optional data to forward to L2. This data is provided        solely as a convenience for external contracts. Aside from enforcing a maximum        length, these contracts provide no guarantees about its content.

### deposits

```solidity
function deposits(address, address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### donateNative

```solidity
function donateNative() external payable
```



*Adds native token balance to the account. This is meant to allow for native token to be migrated from an old gateway to a new gateway. NOTE: This is left for one upgrade only so we are able to receive the migrated native token from the old contract*


### finalizeERC20Withdrawal

```solidity
function finalizeERC20Withdrawal(address _l1Token, address _l2Token, address _from, address _to, uint256 _amount, bytes _data) external nonpayable
```



*Complete a withdrawal from L2 to L1, and credit funds to the recipient&#39;s balance of the L1 ERC20 token. This call will fail if the initialized withdrawal from L2 has not been finalized.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1Token | address | Address of L1 token to finalizeWithdrawal for.
| _l2Token | address | Address of L2 token where withdrawal was initiated.
| _from | address | L2 address initiating the transfer.
| _to | address | L1 address to credit the withdrawal to.
| _amount | uint256 | Amount of the ERC20 to deposit.
| _data | bytes | Data provided by the sender on L2. This data is provided   solely as a convenience for external contracts. Aside from enforcing a maximum   length, these contracts provide no guarantees about its content.

### finalizeGCDWithdrawal

```solidity
function finalizeGCDWithdrawal(address _from, address _to, uint256 _amount, bytes _data) external nonpayable
```



*Complete a withdrawal from L2 to L1, and credit funds to the recipient&#39;s balance of the L1 GCD token. Since only the xDomainMessenger can call this function, it will never be called before the withdrawal is finalized.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | L2 address initiating the transfer.
| _to | address | L1 address to credit the withdrawal to.
| _amount | uint256 | Amount of the ERC20 to deposit.
| _data | bytes | Optional data to forward to L2. This data is provided        solely as a convenience for external contracts. Aside from enforcing a maximum        length, these contracts provide no guarantees about its content.

### gcd

```solidity
function gcd() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### initialize

```solidity
function initialize(address _l1messenger, address _l2TokenBridge, address _gcd) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1messenger | address | L1 Messenger address being used for cross-chain communications.
| _l2TokenBridge | address | L2 standard bridge address.
| _gcd | address | undefined

### l2TokenBridge

```solidity
function l2TokenBridge() external view returns (address)
```



*get the address of the corresponding L2 bridge contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | Address of the corresponding L2 bridge contract.

### messenger

```solidity
function messenger() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined



## Events

### ERC20DepositInitiated

```solidity
event ERC20DepositInitiated(address indexed _l1Token, address indexed _l2Token, address indexed _from, address _to, uint256 _amount, bytes _data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1Token `indexed` | address | undefined |
| _l2Token `indexed` | address | undefined |
| _from `indexed` | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _data  | bytes | undefined |

### ERC20WithdrawalFinalized

```solidity
event ERC20WithdrawalFinalized(address indexed _l1Token, address indexed _l2Token, address indexed _from, address _to, uint256 _amount, bytes _data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _l1Token `indexed` | address | undefined |
| _l2Token `indexed` | address | undefined |
| _from `indexed` | address | undefined |
| _to  | address | undefined |
| _amount  | uint256 | undefined |
| _data  | bytes | undefined |

### GCDDepositInitiated

```solidity
event GCDDepositInitiated(address indexed _from, address indexed _to, uint256 _amount, bytes _data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from `indexed` | address | undefined |
| _to `indexed` | address | undefined |
| _amount  | uint256 | undefined |
| _data  | bytes | undefined |

### GCDWithdrawalFinalized

```solidity
event GCDWithdrawalFinalized(address indexed _from, address indexed _to, uint256 _amount, bytes _data)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from `indexed` | address | undefined |
| _to `indexed` | address | undefined |
| _amount  | uint256 | undefined |
| _data  | bytes | undefined |



