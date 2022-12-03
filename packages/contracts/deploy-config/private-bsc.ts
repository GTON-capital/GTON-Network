const config = {
  numDeployConfirmations: 2,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 604800,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x002E7FB7f50A3b522F39A3F2fF19b2A01Ec4F4C2',
  ovmProposerAddress: '0xA3419c9A88121aE7846d93790E8ddC3974c1dD10',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0xFe7B3F3dEAd43A7DfFFbC49D037050030B641999',
  ovmAddressManagerOwner: '0xFe7B3F3dEAd43A7DfFFbC49D037050030B641999',
  ovmGasPriceOracleOwner: '0xFe7B3F3dEAd43A7DfFFbC49D037050030B641999',
  ovmWhitelistOwner: '0xFe7B3F3dEAd43A7DfFFbC49D037050030B641999',
}

export default config
