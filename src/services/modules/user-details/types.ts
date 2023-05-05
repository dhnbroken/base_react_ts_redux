export interface UserDetailsResponse {
  name: string | null;
  email: string | null;
  id: string | null;
}

export interface CreateUserDetailsRequest {
  name: string;
  email: string;
}

export interface PatchUserDetailsRequest {
  name?: string;
  email?: string;
}

export interface DeleteUserDetailsResponse {
  id?: string;
}
