export interface StepItem {
  number: number;
  title: string;
  detail: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  steps: StepItem[];
}

export const CHECKLIST_SECTIONS: SectionGroup[] = [
  {
    id: 'before-anything-goes-wrong',
    title: 'BEFORE ANYTHING GOES WRONG',
    steps: [
      {
        number: 1,
        title: 'Keep the invoice.',
        detail: 'Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.',
      },
      {
        number: 2,
        title: 'Register the product.',
        detail: "Many brands ask you to register on their website or app; some add extra warranty when you do.",
      },
      {
        number: 3,
        title: 'Read the warranty card once.',
        detail: 'Note how long it lasts, what it covers, and what it excludes.',
      },
      {
        number: 4,
        title: 'Record the condition.',
        detail: 'Take a few dated photos of the product once it is installed or unboxed.',
      },
    ],
  },
  {
    id: 'when-the-fault-appears',
    title: 'WHEN THE FAULT APPEARS',
    steps: [
      {
        number: 5,
        title: 'Record the fault.',
        detail: 'Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.',
      },
      {
        number: 6,
        title: 'Raise the complaint in writing.',
        detail: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
      },
      {
        number: 7,
        title: 'Note every reference number.',
        detail: 'Write down the complaint or ticket number, the date and the name of anyone you speak to.',
      },
    ],
  },
  {
    id: 'when-a-technician-visits',
    title: 'WHEN A TECHNICIAN VISITS',
    steps: [
      {
        number: 8,
        title: 'Ask for the job sheet.',
        detail: 'Ask the technician for a copy of the visit report or job sheet before they leave.',
      },
      {
        number: 9,
        title: 'Ask what was tested.',
        detail: 'Ask which test or instrument was used to reach the diagnosis.',
      },
      {
        number: 10,
        title: 'Take your own photos.',
        detail: 'Photograph the product and anything the technician points to, during the visit.',
      },
    ],
  },
  {
    id: 'if-the-claim-is-refused',
    title: 'IF THE CLAIM IS REFUSED',
    steps: [
      {
        number: 11,
        title: 'Ask for the reason in writing.',
        detail: 'Request a written explanation that names the exact cause and the evidence for it.',
      },
      {
        number: 12,
        title: 'Ask for the technical report.',
        detail: 'If the refusal rests on an inspection, ask for that inspection report.',
      },
      {
        number: 13,
        title: 'Escalate inside the company.',
        detail: 'Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.',
      },
      {
        number: 14,
        title: 'Keep it factual.',
        detail: 'Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.',
      },
      {
        number: 15,
        title: 'Know your consumer helpline.',
        detail: 'Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.',
      },
    ],
  },
];
