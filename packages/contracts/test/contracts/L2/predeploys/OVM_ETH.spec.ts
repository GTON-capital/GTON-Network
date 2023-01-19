/* External Imports */
import { ethers } from 'hardhat'
import { Contract } from 'ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

import { expect } from '../../../setup'
import { deploy } from '../../../helpers'

describe('OVM_GCD', () => {
  let signer1: SignerWithAddress
  let signer2: SignerWithAddress
  before(async () => {
    ;[signer1, signer2] = await ethers.getSigners()
  })

  let OVM_GCD: Contract
  beforeEach(async () => {
    OVM_GCD = await deploy('OVM_GCD')
  })

  describe('transfer', () => {
    it('should revert', async () => {
      await expect(OVM_GCD.transfer(signer2.address, 100)).to.be.revertedWith(
        'OVM_GCD: transfer is disabled pending further community discussion.'
      )
    })
  })

  describe('approve', () => {
    it('should revert', async () => {
      await expect(OVM_GCD.approve(signer2.address, 100)).to.be.revertedWith(
        'OVM_GCD: approve is disabled pending further community discussion.'
      )
    })
  })

  describe('transferFrom', () => {
    it('should revert', async () => {
      await expect(
        OVM_GCD.transferFrom(signer1.address, signer2.address, 100)
      ).to.be.revertedWith(
        'OVM_GCD: transferFrom is disabled pending further community discussion.'
      )
    })
  })

  describe('increaseAllowance', () => {
    it('should revert', async () => {
      await expect(
        OVM_GCD.increaseAllowance(signer2.address, 100)
      ).to.be.revertedWith(
        'OVM_GCD: increaseAllowance is disabled pending further community discussion.'
      )
    })
  })

  describe('decreaseAllowance', () => {
    it('should revert', async () => {
      await expect(
        OVM_GCD.decreaseAllowance(signer2.address, 100)
      ).to.be.revertedWith(
        'OVM_GCD: decreaseAllowance is disabled pending further community discussion.'
      )
    })
  })
})
