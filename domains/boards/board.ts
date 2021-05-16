import { Card } from '../cards/card';

export interface Board {
  id?: string;
  name: string;
  actions?: string;
  boardStars?: string;
  card_pluginData?: boolean;
  checklists?: string;
  customFields?: boolean;
  fields?: string;
  labels?: string;
  lists?: string;
  members?: string;
  membership?: string;
  pluginData?: boolean;
  organization?: boolean;
  organization_pluginData?: boolean;
  myPrefs?: boolean;
  tags?: boolean;
  cards?: Card;
  defaultLabels?: boolean;
  defaultLists?: boolean;
  desc?: string;
  idOrganization?: string;
  idBoardSource?: string;
  keepFromSource?: string;
  powerUps?: string;
  prefs_permissionLevel?: string;
  prefs_voting?: string;
  prefs_comments?: string;
  prefs_invitations?: string;
  prefs_selfJoin?: boolean;
  prefs_cardCovers?: boolean;
  prefs_background?: string;
  prefs_cardAging?: string;
}

export interface BoardParams {
  key: string;
  token: string;
}
