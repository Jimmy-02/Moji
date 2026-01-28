import {create} from 'zustand'
import {toast} from 'sonner'
import { authService } from '@/services/authService';
import type { AuthState } from '@/types/store';

export const useAuthStore = create<AuthState>((set, get) =>({
    accessToken: null,
    user: null,
    loading: false,

    clearState: () => {
        set({accessToken: null, user: null, loading: false})
    },
    signUp: async (username, password, email, firstName, lastName) =>{
        try {
            set({loading: true})

            await authService.signUp(username, password, email, firstName, lastName);

            toast.success('Đăng ký thành công! Bạn sẽ được chuyển sang trang đăng nhập.');
        } catch (error) {
            console.log(error);
            toast.error('Đăng ký không thành công');
        }
        finally{
            set({loading: false});
        }
        
    },
    signIn: async (username, password) =>{
        try {
            set({loading: true})

            const {accessToken} = await authService.signIn(username, password);
            set({accessToken});
            
            await get().fetchMe();

            toast.success('Chào mừng bạn quay trở lại');
        } catch (error) {
            console.log(error);
            toast.error('Sai tên đăng nhập hoặc mật khẩu');
        } finally{
            set({loading: false})
        }
    },
    signOut: async() => {
        try {
            get().clearState();
            await authService.signOut();
            toast.success("Logout thành công!");
        } catch (error) {
            console.error(error);
            toast.error("Lỗi xảy ra khi logout");
        }
    },

    fetchMe: async() => {
        try {
            set({loading: true});
            const user = await authService.fetchMe();
            set({user});
        } catch (error) {
            console.error(error);
            set({user: null, accessToken: null});
            toast.error("Lỗi xảy ra khi lấy dữ liệu người dùng")
        }
        finally{
            set({loading: false})
        }
    }
}));