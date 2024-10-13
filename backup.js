const lighthouse = require('@lighthouse-web3/sdk');

async function main() {

  const uploadResponse = await lighthouse.upload(
  './', 
  '2fc357f7.f952020a20bd4e97afa7aca88221116d')
  console.log(uploadResponse)
  const cid = uploadResponse.data.Hash;
  console.log(`Uploaded to IPFS : ${cid}`);
  process.stdout.write(`::set-output name=cid::${cid}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
