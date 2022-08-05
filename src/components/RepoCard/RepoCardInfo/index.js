import {
  RepoCardInfoImg,
  RepoCardInfoText,
  RepoCardInfoLabel,
  RepoCardWrapper,
  RepoInfoLink,
} from "./style";
const RepoCardInfo = ({ repo }) => {
  return (
    <RepoCardWrapper>
      <RepoCardInfoImg
        width="100px"
        height="100px"
        src={`${repo?.owner?.avatar_url}`}
        alt="avatar"
      />
      <RepoCardInfoText>
        <RepoCardInfoLabel>Name: </RepoCardInfoLabel> {repo?.name}
      </RepoCardInfoText>
      <RepoCardInfoText>
        <RepoCardInfoLabel>Star Count: </RepoCardInfoLabel>{" "}
        {repo?.stargazers_count}
      </RepoCardInfoText>
      <RepoCardInfoText>
        <RepoInfoLink href={repo?.html_url}>{repo?.html_url}</RepoInfoLink>
      </RepoCardInfoText>
      <RepoCardInfoText>
        <RepoCardInfoLabel>Description: </RepoCardInfoLabel> {repo?.description}
      </RepoCardInfoText>
    </RepoCardWrapper>
  );
};

export default RepoCardInfo;
