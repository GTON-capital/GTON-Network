const config = {
  numDeployConfirmations: 4,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 3,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 60,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x569F0f5034CB2eaF4cD74C18B82B85294Cb9Ed9d',
  ovmProposerAddress: '0x1C6d3a214D4F9FEE46F6912B49BAc2E2e19cFEEB',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x4989c5C3759Ec9F81a2ddB0A55DE5e9eD9398aac',
  ovmAddressManagerOwner: '0x4989c5C3759Ec9F81a2ddB0A55DE5e9eD9398aac',
  ovmGasPriceOracleOwner: '0x4989c5C3759Ec9F81a2ddB0A55DE5e9eD9398aac',
  ovmWhitelistOwner: '0x4989c5C3759Ec9F81a2ddB0A55DE5e9eD9398aac',
  gcdAddress: '0xbc4a856d5b8f208d324898f973c35efbe0ab50d9',
}

export default config
