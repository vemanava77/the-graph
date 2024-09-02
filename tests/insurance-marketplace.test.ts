import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ClaimApproved } from "../generated/schema"
import { ClaimApproved as ClaimApprovedEvent } from "../generated/InsuranceMarketplace/InsuranceMarketplace"
import { handleClaimApproved } from "../src/insurance-marketplace"
import { createClaimApprovedEvent } from "./insurance-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let claimant = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let claimId = BigInt.fromI32(234)
    let policyId = BigInt.fromI32(234)
    let coverageAmount = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newClaimApprovedEvent = createClaimApprovedEvent(
      claimant,
      claimId,
      policyId,
      coverageAmount,
      timestamp
    )
    handleClaimApproved(newClaimApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimApproved created and stored", () => {
    assert.entityCount("ClaimApproved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimant",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ClaimApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimId",
      "234"
    )
    assert.fieldEquals(
      "ClaimApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "policyId",
      "234"
    )
    assert.fieldEquals(
      "ClaimApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "coverageAmount",
      "234"
    )
    assert.fieldEquals(
      "ClaimApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
