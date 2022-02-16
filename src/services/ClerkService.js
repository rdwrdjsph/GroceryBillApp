import axios from "axios";

const ITEM_API_VIEW_URL = "http://localhost:8081/app/clerk/view";

class ClerkService {
    getClerk() {
        return axios.get(ITEM_API_VIEW_URL);
    }

    getClerkById(clerkId) {
        return axios.get(ITEM_API_VIEW_URL + '/' + clerkId);
    }
}

export default new ClerkService();