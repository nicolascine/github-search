export default class ResultSerializer {
  edges(
    edgesData: Array<{
      node: {
        name: string
        description: string
        url: string
        stargazers: { totalCount: number; __typename: string }
        __typename: string
      }
      __typename: string
    }>
  ) {
    const array: Array<{
      description: string
      title: string
      starCount: string
      link: string
    }> = []

    edgesData.map((item: any) => {
      array.push({
        description: item.node.description,
        title: item.node.name,
        starCount: item.node.stargazers.totalCount,
        link: item.node.url
      })
    })
    return array
  }
  user(userData: {
    name: string
    login: string
    organization: string | null
    company: string | null
    avatarUrl: string
    location: string
    starredRepositories: { totalCount: number; __typename: string }
    repositories: { totalCount: number; __typename: string }
    followers: { totalCount: number; __typename: string }
    __typename: string
  }) {
    return {
      userName: userData.name,
      userLogin: userData.login,
      company: userData.company,
      avatarUrl: userData.avatarUrl,
      organization: userData.company,
      location: userData.location,
      star: userData.starredRepositories.totalCount,
      repo: userData.repositories.totalCount,
      followers: userData.followers.totalCount
    }
  }
}
