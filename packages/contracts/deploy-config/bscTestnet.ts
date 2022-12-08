const config = {
  numDeployConfirmations: 4,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 3,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 604800,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x958CCbEecD0ca2A30F04307a586DfcB43915f564',
  ovmProposerAddress: '0x582E44bBf21f6Ee19D7B59bA859Cc159FdfA8BB4',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x536059788FeD3A9874fD224Ba137d280Bb3f17FE',
  ovmAddressManagerOwner: '0x536059788FeD3A9874fD224Ba137d280Bb3f17FE',
  ovmGasPriceOracleOwner: '0x536059788FeD3A9874fD224Ba137d280Bb3f17FE',
  ovmWhitelistOwner: '0x536059788FeD3A9874fD224Ba137d280Bb3f17FE',
  gcdAddress: '0xbc4a856d5b8f208d324898f973c35efbe0ab50d9',
}

export default config
