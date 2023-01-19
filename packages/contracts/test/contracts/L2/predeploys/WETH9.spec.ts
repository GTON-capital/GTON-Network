import { ethers } from 'hardhat'
import { Contract } from 'ethers'
import { smock, MockContract } from '@defi-wonderland/smock'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

import { expect } from '../../../setup'

describe('WGCD', () => {
  let signer: SignerWithAddress
  let otherSigner: SignerWithAddress

  before(async () => {
    ;[signer, otherSigner] = await ethers.getSigners()
  })

  let Mock__WGCD: MockContract<Contract>
  beforeEach(async () => {
    Mock__WGCD = await (await smock.mock('WGCD')).deploy()
  })

  describe('deposit', () => {
    it('should create WGCD with fallback function', async () => {
      await expect(
        signer.sendTransaction({
          to: Mock__WGCD.address,
          value: 200,
        })
      ).to.not.be.reverted

      expect(await Mock__WGCD.balanceOf(signer.address)).to.be.equal(200)
    })

    it('should create WGCD with deposit function', async () => {
      await expect(Mock__WGCD.deposit({ value: 100 })).to.not.be.reverted

      expect(await Mock__WGCD.balanceOf(signer.address)).to.be.equal(100)
    })
  })

  describe('withdraw', () => {
    it('should revert when withdraw amount is bigger than balance', async () => {
      await expect(Mock__WGCD.withdraw(10000)).to.be.reverted
    })

    it('should withdraw to eth', async () => {
      await Mock__WGCD.deposit({ value: 100 })
      await expect(Mock__WGCD.withdraw(50)).to.not.be.reverted
      expect(await Mock__WGCD.balanceOf(signer.address)).to.be.equal(50)
    })
  })

  describe('totalSupply', () => {
    it('should return the totalSupply', async () => {
      await expect(Mock__WGCD.totalSupply()).to.not.be.reverted
    })
  })

  describe('transfer', () => {
    it('should revert when sending more than deposited', async () => {
      await Mock__WGCD.deposit({ value: 100 })
      await expect(Mock__WGCD.transfer(otherSigner.address, 500)).to.be.reverted
    })

    it('should transfer WGCD to an other address', async () => {
      await Mock__WGCD.deposit({ value: 100 })
      await expect(Mock__WGCD.transfer(otherSigner.address, 50)).to.not.be
        .reverted

      expect(await Mock__WGCD.balanceOf(signer.address)).to.be.equal(50)

      expect(await Mock__WGCD.balanceOf(otherSigner.address)).to.be.equal(50)
    })
  })

  describe('transferFrom', () => {
    it('should revert when there is no allowance', async () => {
      await Mock__WGCD.deposit({ value: 100 })
      await expect(
        Mock__WGCD.connect(otherSigner).transferFrom(
          signer.address,
          otherSigner.address,
          50
        )
      ).to.be.reverted
    })

    it('should transfer WGCD to an other address when there is approvement', async () => {
      await Mock__WGCD.deposit({ value: 100 })
      await Mock__WGCD.approve(otherSigner.address, 50)
      await expect(
        Mock__WGCD.connect(otherSigner).transferFrom(
          signer.address,
          otherSigner.address,
          50
        )
      ).to.not.be.reverted
    })
  })
})
