import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ClaimApproved,
  ClaimRejected,
  ClaimSubmitted,
  Log,
  PolicyBought,
  PolicyTemplateListed,
  PolicyTransferred
} from "../generated/InsuranceMarketplace/InsuranceMarketplace"

export function createClaimApprovedEvent(
  claimant: Address,
  claimId: BigInt,
  policyId: BigInt,
  coverageAmount: BigInt,
  timestamp: BigInt
): ClaimApproved {
  let claimApprovedEvent = changetype<ClaimApproved>(newMockEvent())

  claimApprovedEvent.parameters = new Array()

  claimApprovedEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )
  claimApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "claimId",
      ethereum.Value.fromUnsignedBigInt(claimId)
    )
  )
  claimApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  claimApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "coverageAmount",
      ethereum.Value.fromUnsignedBigInt(coverageAmount)
    )
  )
  claimApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return claimApprovedEvent
}

export function createClaimRejectedEvent(
  claimant: Address,
  claimId: BigInt,
  policyId: BigInt,
  timestamp: BigInt
): ClaimRejected {
  let claimRejectedEvent = changetype<ClaimRejected>(newMockEvent())

  claimRejectedEvent.parameters = new Array()

  claimRejectedEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )
  claimRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "claimId",
      ethereum.Value.fromUnsignedBigInt(claimId)
    )
  )
  claimRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  claimRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return claimRejectedEvent
}

export function createClaimSubmittedEvent(
  claimant: Address,
  claimId: BigInt,
  policyId: BigInt,
  coverageAmount: BigInt,
  timestamp: BigInt
): ClaimSubmitted {
  let claimSubmittedEvent = changetype<ClaimSubmitted>(newMockEvent())

  claimSubmittedEvent.parameters = new Array()

  claimSubmittedEvent.parameters.push(
    new ethereum.EventParam("claimant", ethereum.Value.fromAddress(claimant))
  )
  claimSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "claimId",
      ethereum.Value.fromUnsignedBigInt(claimId)
    )
  )
  claimSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  claimSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "coverageAmount",
      ethereum.Value.fromUnsignedBigInt(coverageAmount)
    )
  )
  claimSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return claimSubmittedEvent
}

export function createLogEvent(
  message: string,
  user: Address,
  value: BigInt
): Log {
  let logEvent = changetype<Log>(newMockEvent())

  logEvent.parameters = new Array()

  logEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  logEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return logEvent
}

export function createPolicyBoughtEvent(
  buyer: Address,
  policyId: BigInt,
  policyType: i32,
  timestamp: BigInt
): PolicyBought {
  let policyBoughtEvent = changetype<PolicyBought>(newMockEvent())

  policyBoughtEvent.parameters = new Array()

  policyBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  policyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  policyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "policyType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(policyType))
    )
  )
  policyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return policyBoughtEvent
}

export function createPolicyTemplateListedEvent(
  provider: Address,
  policyId: BigInt,
  premium: BigInt,
  coverage: BigInt,
  expirationDate: BigInt,
  policyType: i32,
  timestamp: BigInt
): PolicyTemplateListed {
  let policyTemplateListedEvent = changetype<PolicyTemplateListed>(
    newMockEvent()
  )

  policyTemplateListedEvent.parameters = new Array()

  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "policyId",
      ethereum.Value.fromUnsignedBigInt(policyId)
    )
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "premium",
      ethereum.Value.fromUnsignedBigInt(premium)
    )
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "coverage",
      ethereum.Value.fromUnsignedBigInt(coverage)
    )
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "expirationDate",
      ethereum.Value.fromUnsignedBigInt(expirationDate)
    )
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "policyType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(policyType))
    )
  )
  policyTemplateListedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return policyTemplateListedEvent
}

export function createPolicyTransferredEvent(
  oldOwner: Address,
  newOwner: Address,
  tokenId: BigInt
): PolicyTransferred {
  let policyTransferredEvent = changetype<PolicyTransferred>(newMockEvent())

  policyTransferredEvent.parameters = new Array()

  policyTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  policyTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  policyTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return policyTransferredEvent
}
