export declare const storefrontPath = "api/v2/storefront";
declare const endpoints: {
    productsPath: () => string;
    productPath: (id: string) => string;
    taxonsPath: () => string;
    taxonPath: (id: string) => string;
    countriesPath: () => string;
    countryPath: (iso: string) => string;
    cartPath: () => string;
    cartAddItemPath: () => string;
    cartRemoveItemPath: (id: string) => string;
    cartEmptyPath: () => string;
    cartSetItemQuantity: () => string;
    cartApplyCodePath: () => string;
    cartRemoveCodePath: (code?: string) => string;
    cartEstimateShippingMethodsPath: () => string;
    cartAssociatePath: () => string;
    checkoutPath: () => string;
    checkoutNextPath: () => string;
    checkoutAdvancePath: () => string;
    checkoutCompletePath: () => string;
    checkoutAddStoreCreditsPath: () => string;
    checkoutRemoveStoreCreditsPath: () => string;
    checkoutPaymentMethodsPath: () => string;
    checkoutShippingMethodsPath: () => string;
    oauthTokenPath: () => string;
    oauthRevokePath: () => string;
    accountPath: () => string;
    accountAddressPath: (id: string) => string;
    accountAddressesPath: () => string;
    accountAddressRemovePath: (id: string) => string;
    accountConfirmPath: (confirmationToken: string) => string;
    accountCreditCardsPath: () => string;
    accountDefaultCreditCardPath: () => string;
    accountCompletedOrdersPath: () => string;
    accountCompletedOrderPath: (orderNumber: string) => string;
    forgotPasswordPath: () => string;
    resetPasswordPath: (resetPasswordToken: string) => string;
    orderStatusPath: (orderNumber: string) => string;
    pagesPath: () => string;
    pagePath: (id: string) => string;
};
export default endpoints;
