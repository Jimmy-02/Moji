import { friendService } from "@/services/friendService";
import { FriendState } from "@/types/store";
import { create } from "zustand";

export const useFriendStore = create<FriendState>((set, get) => ({
    loading: false,
    searchByUsername: async (username) => {

    },
    addFriend: async (to, message?) => {

    }
}))