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
  ovmSequencerAddress: '0x38769F98C5E0131c8608c3b799D37B99dfa04543',
  ovmProposerAddress: '0x90a773aE4c9B77B978917f92ee9b7F19D8FDCe4E',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x1664422F57A192e3eEdF72cda297BEcbA2348Fa6',
  ovmAddressManagerOwner: '0x1664422F57A192e3eEdF72cda297BEcbA2348Fa6',
  ovmGasPriceOracleOwner: '0x1664422F57A192e3eEdF72cda297BEcbA2348Fa6',
  ovmWhitelistOwner: '0x1664422F57A192e3eEdF72cda297BEcbA2348Fa6',
  gcdAddress: '0xbc4a856d5b8f208d324898f973c35efbe0ab50d9',
}

export default config
