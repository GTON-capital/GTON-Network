const config = {
  numDeployConfirmations: 4,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 3,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0xDb4681d2dc825309106E42491DFd324a2d00B06d',
  ovmProposerAddress: '0xf4d2b9CBD3474E9ec80c39425a68a41EEb6E93A5',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x808cDc0f47aa718D56205aBF4A1f6e165C9EC3d1',
  ovmAddressManagerOwner: '0x808cDc0f47aa718D56205aBF4A1f6e165C9EC3d1',
  ovmGasPriceOracleOwner: '0x808cDc0f47aa718D56205aBF4A1f6e165C9EC3d1',
  ovmWhitelistOwner: '0x808cDc0f47aa718D56205aBF4A1f6e165C9EC3d1',
  gcdAddress: '0xbc4a856d5b8f208d324898f973c35efbe0ab50d9',
}

export default config
