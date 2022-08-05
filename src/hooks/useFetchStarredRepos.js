import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { _2digits } from "../utils";

function useFetchStarredRepos() {
  const [starredRepos, setStarredRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = useCallback(async () => {
    let days = 7;
    let todayInMilliseconds = new Date().getTime();
    let daysAgoInMilliseconds = days * 24 * 60 * 60 * 1000;
    let dateDaysBefore = new Date(todayInMilliseconds - daysAgoInMilliseconds);
    let date = `${dateDaysBefore.getFullYear()}-${_2digits(
      dateDaysBefore.getMonth() + 1
    )}-${_2digits(dateDaysBefore.getDate())}`;
    const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;

    setLoading(true);
    try {
      const { data } = await axios.get(url);
      await setLoading(false);
      await setStarredRepos(data.items);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [setError, setLoading]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { loading, starredRepos, error };
}

export default useFetchStarredRepos;
