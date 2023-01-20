const config = {
  numDeployConfirmations: 4,
  gasPrice: 10_000_000_000,
  l1BlockTimeSeconds: 3,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 50021,
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 10,
  sccSequencerPublishWindowSeconds: 12592000,
  ovmSequencerAddress: '0xFcaF22266Dfa302C81E60851A6f9f44e7DbAA27B',
  ovmProposerAddress: '0xbacE1e283B1c3C0604324E104010FDcaAFE14f19',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  ovmAddressManagerOwner: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  ovmGasPriceOracleOwner: '0x232e2dabFADD007c702C25812Eca69Faf2Ecd816',
  ovmWhitelistOwner: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  gcdAddress: '0x213ecAe6b3CbC0AD976f7d82626546d5b63A71cB',
  hfBerlinBlock: +process.env.DEPLOYER_BERLIN_BLOCK || 0,
}

export default config
