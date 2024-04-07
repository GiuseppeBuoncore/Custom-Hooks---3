import useGithubUser from "./useGithubUser";

function GithubUser( {username} ) {
  const {data, loading, error, onFetchUser}= useGithubUser(username)

  function handleGetUserData () {
    onFetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}>load user data</button>
      {loading && <h1>loading...</h1>}
      {error && <h1>there has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

export default GithubUser;
