import { create } from "zustand";
import { io, type Socket } from "socket.io-client";
import { useAuthStore } from "./useAuthStore";

const baseURL = import.meta.env.VITE_SOCKET_URL;

