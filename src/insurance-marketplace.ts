import {
  ClaimApproved as ClaimApprovedEvent,
  ClaimRejected as ClaimRejectedEvent,
  ClaimSubmitted as ClaimSubmittedEvent,
  Log as LogEvent,
  PolicyBought as PolicyBoughtEvent,
  PolicyTemplateListed as PolicyTemplateListedEvent,
  PolicyTransferred as PolicyTransferredEvent
} from "../generated/InsuranceMarketplace/InsuranceMarketplace"
import {
  ClaimApproved,
  ClaimRejected,
  ClaimSubmitted,
  Log,
  PolicyBought,
  PolicyTemplateListed,
  PolicyTransferred
} from "../generated/schema"

export function handleClaimApproved(event: ClaimApprovedEvent): void {
  let entity = new ClaimApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant
  entity.claimId = event.params.claimId
  entity.policyId = event.params.policyId
  entity.coverageAmount = event.params.coverageAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimRejected(event: ClaimRejectedEvent): void {
  let entity = new ClaimRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant
  entity.claimId = event.params.claimId
  entity.policyId = event.params.policyId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimSubmitted(event: ClaimSubmittedEvent): void {
  let entity = new ClaimSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimant = event.params.claimant
  entity.claimId = event.params.claimId
  entity.policyId = event.params.policyId
  entity.coverageAmount = event.params.coverageAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLog(event: LogEvent): void {
  let entity = new Log(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.message = event.params.message
  entity.user = event.params.user
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePolicyBought(event: PolicyBoughtEvent): void {
  let entity = new PolicyBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.policyId = event.params.policyId
  entity.policyType = event.params.policyType
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePolicyTemplateListed(
  event: PolicyTemplateListedEvent
): void {
  let entity = new PolicyTemplateListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.policyId = event.params.policyId
  entity.premium = event.params.premium
  entity.coverage = event.params.coverage
  entity.expirationDate = event.params.expirationDate
  entity.policyType = event.params.policyType
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePolicyTransferred(event: PolicyTransferredEvent): void {
  let entity = new PolicyTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
