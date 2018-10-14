export interface MembershipState {
    memberships: Membership[]
}

export interface Membership {
    total: number,
    saving: number,
    purchaseDate: string,
    cardType: string,
    timeLimit: number
}
