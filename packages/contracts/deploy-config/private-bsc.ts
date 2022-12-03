const config = {
  numDeployConfirmations: 2,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50023,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 604800,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x2943b2328A2db2B5404d2706a2e96053bed8fD03',
  ovmProposerAddress: '0x40574a38d7497C182805E471272EF871b9EE0869',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x8Ef87a43FF22aF94cAd93D91F5d7fc6C8C3739cC',
  ovmAddressManagerOwner: '0x8Ef87a43FF22aF94cAd93D91F5d7fc6C8C3739cC',
  ovmGasPriceOracleOwner: '0x8Ef87a43FF22aF94cAd93D91F5d7fc6C8C3739cC',
  ovmWhitelistOwner: '0x8Ef87a43FF22aF94cAd93D91F5d7fc6C8C3739cC',
}

export default config
