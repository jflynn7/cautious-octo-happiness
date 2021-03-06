export interface WPLoginRequest {
  username?: string;
  password?: string;
  remember?: boolean;
}

export interface WPLoginSuccess {
  data?: WPUserData;
  ID?: number;
  caps?: WPCapabilities;
  cap_key?: string;
  roles?: string[];
  allcaps?: WPCapabilitySummary;
  filter?: any;
}

interface WPCapabilitySummary {
  switch_themes?: boolean;
  edit_themes?: boolean;
  activate_plugins?: boolean;
  edit_plugins?: boolean;
  edit_users?: boolean;
  edit_files?: boolean;
  manage_options?: boolean;
  moderate_comments?: boolean;
  manage_categories?: boolean;
  manage_links?: boolean;
  upload_files?: boolean;
  import?: boolean;
  unfiltered_html?: boolean;
  edit_posts?: boolean;
  edit_others_posts?: boolean;
  edit_published_posts?: boolean;
  publish_posts?: boolean;
  edit_pages?: boolean;
  read?: boolean;
  level_10?: boolean;
  level_9?: boolean;
  level_8?: boolean;
  level_7?: boolean;
  level_6?: boolean;
  level_5?: boolean;
  level_4?: boolean;
  level_3?: boolean;
  level_2?: boolean;
  level_1?: boolean;
  level_0?: boolean;
  edit_others_pages?: boolean;
  edit_published_pages?: boolean;
  publish_pages?: boolean;
  delete_pages?: boolean;
  delete_others_pages?: boolean;
  delete_published_pages?: boolean;
  delete_posts?: boolean;
  delete_others_posts?: boolean;
  delete_published_posts?: boolean;
  delete_private_posts?: boolean;
  edit_private_posts?: boolean;
  read_private_posts?: boolean;
  delete_private_pages?: boolean;
  edit_private_pages?: boolean;
  read_private_pages?: boolean;
  delete_users?: boolean;
  create_users?: boolean;
  unfiltered_upload?: boolean;
  edit_dashboard?: boolean;
  update_plugins?: boolean;
  delete_plugins?: boolean;
  install_plugins?: boolean;
  update_themes?: boolean;
  install_themes?: boolean;
  update_core?: boolean;
  list_users?: boolean;
  remove_users?: boolean;
  promote_users?: boolean;
  edit_theme_options?: boolean;
  delete_themes?: boolean;
  export?: boolean;
  administrator?: boolean;
}

interface WPCapabilities {
  administrator?: boolean;
}

interface WPUserData {
  ID?: string;
  user_login?: string;
  user_pass?: string;
  user_nicename?: string;
  user_email?: string;
  user_url?: string;
  user_registered?: string;
  user_activation_key?: string;
  user_status?: string;
  display_name?: string;
}
