// data/piiData.ts
export const piiData = {
  pii_data: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    ssn: "123-45-6789",
  },

  encrypted_data: {
    name: "Sm9obiBEb2U=",                              // "John Doe"
    email: "am9obi5kb2VAZXhhbXBsZS5jb20=",           // "john.doe@example.com"
    phone: "KzEyMzQ1Njc4OTA=",                       // "+1234567890"
    address: "MTIzIE1haW4gU3QsIEFueXRvd24sIFVTQQ==", // "123 Main St, Anytown, USA"
    ssn: "MTIzLTQ1LTY3ODk=",                         // "123-45-6789"
  },
};
