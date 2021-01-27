import Post from './contracts/Post.json'

const options = {
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  contracts: [Post],
  events: {
    Post: ['StorageSet']
  },
  polls: {
    accounts: 15000
  }
}

export default options
