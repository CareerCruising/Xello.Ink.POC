export type FamilyMember = {
  familyMemberId: number;
  familyMemberTypeId: number;
  familyMemberAvatarId: number | null;
  firstName?: string;
  avatarUrl?: string;
};

/**
 * FamilyMemberTypeId

(1, 'Spouse')
(2, 'Partner')
(3, 'Child')
(4, 'Pet')
 */

export enum familyRelationships {
  ME = 0,
  PARTNER = 1,
  SPOUSE = 2,
  CHILD = 3,
  PET = 4,
}

/**
 * (1, 'Emerald')
(2, 'Green')
(3, 'Olive')
(4, 'Yellow')
(5, 'Gold')
(6, 'Orange')
(7, 'Red')
(8, 'Pink')
(9, 'Magenta')
(10, 'Purple')
(11, 'Cornflower')
(12, 'Blue')
 */

export const familyAvatarColors = [
  '', //use user avatar url
  'emerald',
  'green',
  'olive',
  'yellow',
  'gold',
  'orange',
  'red',
  'pink',
  'magenta',
  'purple',
  'cornflower',
  'blue',
];
