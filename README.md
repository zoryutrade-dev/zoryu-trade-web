![Web CI](https://github.com/zoryutrade-dev/zoryu-trade-web/actions/workflows/ci.yml/badge.svg)

# Zoryu Trade Web

> Public web interface for Zoryu Trade.

This repository contains the frontend trading terminal for Zoryu Trade.
It provides market visibility, AI signal presentation, and non-custodial
trade execution via connected Solana wallets.

## Scope

- Trading terminal UI
- Market data visualization
- AI signal display
- Wallet-based execution flow

## Non-Goals

- No private keys
- No backend business logic
- No AI prompt logic
- No execution secrets

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Wallet Adapter
- API contracts from `zoryu-trade-contracts`

## Notes

This repo consumes public APIs and contracts.
All authoritative state lives in backend services.
