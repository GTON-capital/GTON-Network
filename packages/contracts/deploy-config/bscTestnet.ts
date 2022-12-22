const config = {
  numDeployConfirmations: 4,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 3,
  l2BlockGasLimit: 22_500_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x9538A49C0207B3DDc49669405272348B73b5fB92',
  ovmProposerAddress: '0x4a964aF9Fb770b3b8983A96b81aa45c63C75af7A',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0xb85012bF19EF7D1AaC7453D8cF621e1AF0122AA0',
  ovmAddressManagerOwner: '0xb85012bF19EF7D1AaC7453D8cF621e1AF0122AA0',
  ovmGasPriceOracleOwner: '0xb85012bF19EF7D1AaC7453D8cF621e1AF0122AA0',
  ovmWhitelistOwner: '0xb85012bF19EF7D1AaC7453D8cF621e1AF0122AA0',
  gcdAddress: '0xbc4a856d5b8f208d324898f973c35efbe0ab50d9',
}

export default config
