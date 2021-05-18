const { Octokit } = require('@octokit/core')

const octokit = new Octokit({
  auth: process.env.GITHUB_SECRET
})

exports.lambdaHandler = async (event, context) => {
  let response

  try {
    response = await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      event_type: process.env.EVENT_TYPE,
      client_payload: {}
    })
  } catch (err) {
      console.error(err)

      return err
  }

  return response
};
