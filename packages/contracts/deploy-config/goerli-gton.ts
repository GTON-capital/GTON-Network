const config = {
  numDeployConfirmations: 2,
  gasPrice: 150_000_000_000,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50022,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 60,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0x7b1d60E68DF7d2821180c85A9B87DAE5b692Ea47',
  ovmProposerAddress: '0x0e0a2852ba4f88DD516D78348Ac41f33E6BD5F7E',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0x37E6e2744b46CB139f73729b574a5587710F1329',
  ovmAddressManagerOwner: '0x37E6e2744b46CB139f73729b574a5587710F1329',
  ovmGasPriceOracleOwner: '0x37E6e2744b46CB139f73729b574a5587710F1329',
  ovmWhitelistOwner: '0x37E6e2744b46CB139f73729b574a5587710F1329',
  gcdAddress: '0x1ef834d6d3694a932a2082678edd543e3eb3412b',
  hfBerlinBlock: +process.env.DEPLOYER_BERLIN_BLOCK || 0,
}

export default config
