const Post = artifacts.require("Post");

module.exports = function(deployer) {
  deployer.deploy(Post);
};
