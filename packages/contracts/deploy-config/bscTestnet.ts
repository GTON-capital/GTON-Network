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
  ovmSequencerAddress: '0xb2297e7d5a8BFde2Bfc09c6FC744d087ef627cBc',
  ovmProposerAddress: '0x29035C46C6Dc22E537C29443f307a16DA9f3B002',
  ovmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  ovmFeeWalletAddress: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  ovmAddressManagerOwner: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  ovmGasPriceOracleOwner: '0xa62D58e9d5F684b40072Aa48B7D67c0b1616803c',
  ovmWhitelistOwner: '0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD',
  gcdAddress: '0x213ecAe6b3CbC0AD976f7d82626546d5b63A71cB',
  hfBerlinBlock: +process.env.L1_BERLIN_BLOCK || 0,
}

export default config
