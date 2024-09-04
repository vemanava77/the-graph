# The Graph Deployment

This repository contains the files and configurations needed to deploy The Graph subgraph for interacting with a specific smart contract. The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum.

## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Deploying the Subgraph](#deploying-the-subgraph)
5. [Querying the Subgraph](#querying-the-subgraph)
6. [Troubleshooting](#troubleshooting)
7. [License](#license)

## Requirements

To use this repository, you'll need the following tools installed on your local machine:

- [Node.js](https://nodejs.org/en/) (version 12.x or higher)
- [Graph CLI](https://github.com/graphprotocol/graph-cli)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- Access to a Graph node or hosted service to deploy the subgraph.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vemanava77/the-graph.git
    cd the-graph
    ```

2. Install the necessary dependencies:

    ```bash
    yarn install
    ```

3. Verify the Graph CLI is installed by running:

    ```
    graph --version
    ```

If you don't have it installed, use the following command to install it globally:

    ```
    yarn global add @graphprotocol/graph-cli
    ```

## Configuration

### Step 1: Update the Subgraph Manifest

The subgraph manifest is located in `subgraph.yaml`. This file defines the smart contract addresses, events, and entities you want to index. You will need to configure it based on the network and the smart contract you're working with.

### Step 2: Update ABIs

Ensure that the ABI files located in the abis/ directory are correct and up-to-date for the deployed contracts. These files are needed for decoding events and calls in the smart contract.


## Deploying the Subgraph

### Authenticate with The Graph (if you haven't already):
```
graph auth https://api.thegraph.com/deploy/ <YOUR-ACCESS-TOKEN>

```
### Build the subgraph to ensure there are no issues:

```graph codegen
graph build
```

### Deploy the subgraph: 
```graph deploy --product hosted-service <your-github-username>/<subgraph-name>```

