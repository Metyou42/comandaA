declare global {
    interface Window {
        _env: Partial<NodeJS.ProcessEnv>;
    }
}

window._env = window._env || {};

export const SKIP_PREFLIGHT_CHECK = process.env.SKIP_PREFLIGHT_CHECK || window._env.SKIP_PREFLIGHT_CHECK;
export const REACT_APP_DATALOADER_URL = process.env.REACT_APP_DATALOADER_URL || window._env.REACT_APP_DATALOADER_URL;
export const REACT_APP_UI_URL_COMPANYNAME = process.env.REACT_APP_UI_URL_COMPANYNAME || window._env.REACT_APP_UI_URL_COMPANYNAME;
export const REACT_APP_DOCUMENTATION_URL = process.env.REACT_APP_DOCUMENTATION_URL || window._env.REACT_APP_DOCUMENTATION_URL;
export const NGINX_CONTENT_SECURITY_POLICY = process.env.NGINX_CONTENT_SECURITY_POLICY || window._env.NGINX_CONTENT_SECURITY_POLICY;
export const REACT_APP_ACCESS_TOKEN_COOKIE_NAME = process.env.REACT_APP_ACCESS_TOKEN_COOKIE_NAME || window._env.REACT_APP_ACCESS_TOKEN_COOKIE_NAME;
export const REACT_APP_NONCE_COOKIE_NAME = process.env.REACT_APP_NONCE_COOKIE_NAME || window._env.REACT_APP_NONCE_COOKIE_NAME;
export const REACT_APP_PKEY_COOKIE_NAME = process.env.REACT_APP_PKEY_COOKIE_NAME || window._env.REACT_APP_PKEY_COOKIE_NAME;
export const REACT_APP_ID_TOKEN_COOKIE_NAME = process.env.REACT_APP_ID_TOKEN_COOKIE_NAME || window._env.REACT_APP_ID_TOKEN_COOKIE_NAME;
export const REACT_APP_OIDC_CLIENT_ID = process.env.REACT_APP_OIDC_CLIENT_ID || window._env.REACT_APP_OIDC_CLIENT_ID;
export const REACT_APP_OIDC_URL = process.env.REACT_APP_OIDC_URL || window._env.REACT_APP_OIDC_URL;
export const REACT_APP_JWKS_URI = process.env.REACT_APP_JWKS_URI || window._env.REACT_APP_JWKS_URI;
