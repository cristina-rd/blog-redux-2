import { useQuery } from "react-query";
import { getRequest } from "../../utils/http";

function useAllPosts () {
    const {isLoading, error, data} = useQuery('allPosts', () => getRequest(`https://jsonplaceholder.typicode.com/posts`))
    return {isLoading, error, data}
}

export default useAllPosts;