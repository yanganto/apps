// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bytes, u32, u64 } from '@polkadot/types/primitive';
import { Gas } from '@polkadot/types/interfaces/contracts';
import { Balance, BalanceOf, BlockNumber, Moment, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { EraIndex } from '@polkadot/types/interfaces/staking';
import { KtonBalance, MomentT, Power, RingBalance } from '../types';

declare module '@polkadot/metadata/Decorated/consts/types' {
  export interface Constants {
    babe: {

      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       **/
      epochDuration: AugmentedConst<u64>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: AugmentedConst<Moment>;
    };
    timestamp: {

      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: AugmentedConst<Moment>;
    };
    transactionPayment: {

      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<BalanceOf>;
    };
    session: {

      /**
       * Used as first key for `NextKeys` and `KeyOwner` to put all the data into the same branch
       * of the trie.
       **/
      dedupKeyPrefix: AugmentedConst<Bytes>;
    };
    finalityTracker: {

      /**
       * The number of recent samples to keep from this chain. Default is 101.
       **/
      windowSize: AugmentedConst<BlockNumber>;
      /**
       * The delay after which point things become suspicious. Default is 1000.
       **/
      reportLatency: AugmentedConst<BlockNumber>;
    };
    contracts: {

      /**
       * Number of block delay an extrinsic claim surcharge has.
       * When claim surcharge is called by an extrinsic the rent is checked
       * for current_block - delay
       **/
      signedClaimHandicap: AugmentedConst<BlockNumber>;
      /**
       * The minimum amount required to generate a tombstone.
       **/
      tombstoneDeposit: AugmentedConst<BalanceOf>;
      /**
       * Size of a contract at the time of instantiation. This is a simple way to ensure that
       * empty contracts eventually gets deleted.
       **/
      storageSizeOffset: AugmentedConst<u32>;
      /**
       * Price of a byte of storage per one block interval. Should be greater than 0.
       **/
      rentByteFee: AugmentedConst<BalanceOf>;
      /**
       * The amount of funds a contract should deposit in order to offset
       * the cost of one byte.
       * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
       * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
       * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
       * then it would pay 500 BU/day.
       **/
      rentDepositOffset: AugmentedConst<BalanceOf>;
      /**
       * Reward that is received by the party whose touch has led
       * to removal of a contract.
       **/
      surchargeReward: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the base.
       **/
      transactionBaseFee: AugmentedConst<BalanceOf>;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: AugmentedConst<BalanceOf>;
      /**
       * The fee required to instantiate a contract instance. A reasonable default value
       * is 21.
       **/
      contractFee: AugmentedConst<BalanceOf>;
      /**
       * The base fee charged for calling into a contract. A reasonable default
       * value is 135.
       **/
      callBaseFee: AugmentedConst<Gas>;
      /**
       * The base fee charged for instantiating a contract. A reasonable default value
       * is 175.
       **/
      instantiateBaseFee: AugmentedConst<Gas>;
      /**
       * The maximum nesting level of a call/instantiate stack. A reasonable default
       * value is 100.
       **/
      maxDepth: AugmentedConst<u32>;
      /**
       * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
       **/
      maxValueSize: AugmentedConst<u32>;
      /**
       * The maximum amount of gas that could be expended per block. A reasonable
       * default value is 10_000_000.
       **/
      blockGasLimit: AugmentedConst<Gas>;
    };
    society: {

      /**
       * The minimum amount of a deposit required for a bid to be made.
       **/
      candidateDeposit: AugmentedConst<BalanceOf>;
      /**
       * The amount of the unpaid reward that gets deducted in the case that either a skeptic
       * doesn't vote or someone votes in the wrong way.
       **/
      wrongSideDeduction: AugmentedConst<BalanceOf>;
      /**
       * The number of times a member may vote the wrong way (or not at all, when they are a skeptic)
       * before they become suspended.
       **/
      maxStrikes: AugmentedConst<u32>;
      /**
       * The amount of incentive paid within each period. Doesn't include VoterTip.
       **/
      periodSpend: AugmentedConst<BalanceOf>;
      /**
       * The number of blocks between candidate/membership rotation periods.
       **/
      rotationPeriod: AugmentedConst<BlockNumber>;
      /**
       * The number of blocks between membership challenges.
       **/
      challengePeriod: AugmentedConst<BlockNumber>;
    };
    elections: {

      candidacyBond: AugmentedConst<BalanceOf>;
      votingBond: AugmentedConst<BalanceOf>;
      desiredMembers: AugmentedConst<u32>;
      desiredRunnersUp: AugmentedConst<u32>;
      termDuration: AugmentedConst<BlockNumber>;
    };
    kton: {

      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: AugmentedConst<Balance>;
    };
    balances: {

      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: AugmentedConst<Balance>;
    };
    staking: {

      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: AugmentedConst<SessionIndex>;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDurationInEra: AugmentedConst<EraIndex>;
      /**
       * Number of BlockNumbers that staked funds must remain bonded for.
       **/
      bondingDurationInBlockNumber: AugmentedConst<BlockNumber>;
      cap: AugmentedConst<RingBalance>;
      totalPower: AugmentedConst<Power>;
      genesisTime: AugmentedConst<MomentT>;
    };
    treasury: {

      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: AugmentedConst<Permill>;
      /**
       * Minimum amount of *RING* that should be placed in a deposit for making a proposal.
       **/
      ringProposalBondMinimum: AugmentedConst<RingBalance>;
      /**
       * Minimum amount of *KTON* that should be placed in a deposit for making a proposal.
       **/
      ktonProposalBondMinimum: AugmentedConst<KtonBalance>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: AugmentedConst<BlockNumber>;
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: AugmentedConst<Permill>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: AugmentedConst<BlockNumber>;
      /**
       * The amount of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: AugmentedConst<Percent>;
      /**
       * The amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: AugmentedConst<RingBalance>;
      /**
       * The amount held on deposit per byte within the tip report reason.
       **/
      tipReportDepositPerByte: AugmentedConst<RingBalance>;
    };
  }
}
