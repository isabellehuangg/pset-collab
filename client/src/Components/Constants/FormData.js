const terms = [
    { value: '1A', label: '1A' },
    { value: '1B', label: '1B' },
    { value: '2A', label: '2A' },
    { value: '2B', label: '2B' },
    { value: '3A', label: '3A' },
    { value: '3B', label: '3B' },
    { value: '4A', label: '4A' },
    { value: '4B', label: '4B' },
];
  
const pronouns = [
    { value: 'she-her', label: 'she/her/hers' },
    { value: 'he-him', label: 'he/him/his' },
    { value: 'they-them', label: 'they/them/theirs' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];
  
const questions = [
    { id: 'email', label: 'Email *', type: 'email' },
    { id: 'password', label: 'Password *', type: 'password' },
    { id: 'first', label: 'First Name *', type: 'text' },
    { id: 'last', label: 'Last Name *', type: 'text' },
    { id: 'program', label: 'Program *', type: 'text' },
];
  
export { terms, pronouns, questions };
  