/* eslint-disable @typescript-eslint/camelcase */

export default {
  types: {
    "RingBalance": "Balance",
    "KtonBalance": "Balance",
    "MomentT": "Moment",
    "Power": "u32",
    "DepositId": "U256",
  
    "StakingBalanceT": "StakingBalance",
    "StakingBalance": {
      "_enum": {
        "All": null,
        "RingBalance": "Balance",
        "KtonBalance": "Balance"
      }
    },
  
    "StakingLedgerT": "StakingLedger",
    "StakingLedger": {
      "stash": "AccountId",
      "active_ring": "Compact<Balance>",
      "active_deposit_ring": "Compact<Balance>",
      "active_kton": "Compact<Balance>",
      "deposit_items": "Vec<TimeDepositItem>",
      "ring_staking_lock": "StakingLock",
      "kton_staking_lock": "StakingLock",
      "total": "Compact<Balance>",
      "active": "Compact<Balance>",
      "unlocking": "Vec<UnlockChunk>"
    },
  
    "TimeDepositItem": {
      "value": "Compact<Balance>",
      "start_time": "Compact<Moment>",
      "expire_time": "Compact<Moment>"
    },
  
    "RewardDestination": {
      "_enum": {
        "Staked": "Staked",
        "Stash": null,
        "Controller": null
      }
    },
  
    "Staked": {
      "promise_month": "Moment"
    },
  
    "Exposure": {
      "own_ring_balance": "Compact<Balance>",
      "own_kton_balance": "Compact<Balance>",
      "own_power": "Power",
      "total_power": "Power",
      "others": "Vec<IndividualExposure>"
    },
  
    "IndividualExposure": {
      "who": "AccountId",
      "ring_balance": "Compact<Balance>",
      "kton_balance": "Compact<Balance>",
      "power": "Power"
    },
  
    "ValidatorReward": {
      "who": "AccountId",
      "amount": "Compact<Balance>",
      "nominators_reward": "Vec<NominatorReward>"
    },
  
    "NominatorReward": {
      "who": "AccountId",
      "amount": "Compact<Balance>"
    },
  
    "RKT": "RK",
    "RK": {
      "r": "Balance",
      "k": "Balance"
    },
  
    "StakingLock": {
      "staking_amount": "Balance",
      "unbondings": "Vec<Unbonding>"
    },
  
    "Unbonding": {
      "amount": "Balance",
      "moment": "BlockNumber"
    },
  
    "AccountData": {
      "free_ring": "Balance",
      "free_kton": "Balance",
      "reserved_ring": "Balance",
      "reserved_kton": "Balance",
      "free": "Balance",
      "reserved": "Balance",
      "misc_frozen": "Balance",
      "fee_frozen": "Balance"
    },
  
    "EthBlockNumber": "u64",
    "EthAddress": "H160",
  
    "EthTransactionIndex": "(H256, u64)",
  
    "HeaderInfo": {
      "total_difficulty": "U256",
      "parent_hash": "H256",
      "number": "EthBlockNumber"
    },
  
    "EthHeader": {
      "parent_hash": "H256",
      "timestamp": "u64",
      "number": "EthBlockNumber",
      "auth": "EthAddress",
      "transaction_root": "H256",
      "uncles_hash": "H256",
      "extra_data": "Bytes",
      "state_root": "H256",
      "receipts_root": "H256",
      "log_bloom": "Bloom",
      "gas_used": "U256",
      "gas_limit": "U256",
      "difficulty": "U256",
      "seal": "Vec<Bytes>",
      "hash": "Option<H256>"
    },
  
    "Bloom": {
      "_struct": "[u8; 256]"
    },
  
    "EthReceiptProof": {
      "index": "u64",
      "proof": "Bytes",
      "header_hash": "H256"
    }
  }
};
