import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  display: inline-block;
`;

const TermsWrapper = styled.div`
  z-index: 1;
  height: 860px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const TermsH1 = styled.h1`
  color: #000;
  margin-top: 8rem;
  text-align: center;
`;

const TermsH4 = styled.h4`
  color: #000;
`;

const TermsP = styled.p`
  color: #000;
`;

const terms = () => {
  return (
    <TermsContainer>
      <TermsWrapper>
        <TermsH1>Dog Grooming Terms &amp; Conditions</TermsH1>
        <TermsH4>General</TermsH4>
        <TermsP>
          All your data is confidential and will not be shared with any third
          party. <br /> <br /> Please keep us updated with your personal data so
          that all our records are kept up-to-date. <br /> <br /> Please be
          aware that if you own a female dog and they are pregnant or lactating,
          they will not be able to be groomed during these times. If your female
          dog is in season, please let me know in advance so that I can ensure I
          do not book another dog to arrive/stay during the groom.
          <br /> <br /> Please inform us of any changes in your dog’s health or
          temperament to allow us to provide a service tailored to your dog’s
          needs.
          <br /> <br /> I kindly ask that you ensure that your dog has been
          allowed to go to the toilet prior to the grooming appointment.
          <br /> <br /> Please provide any prescribed shampoo for your dog at
          the time of grooming.
        </TermsP>
        <TermsH4>Your Dogs Health &amp; Welfare</TermsH4>
        <TermsP>
          Whilst your dog is in our care it&#39;s health and welfare is our
          primary concern. It will only ever be groomed according to its
          tolerance of the process. <br /> <br /> All dogs entering the salon
          must be microchipped. <br /> <br /> Occasionally during grooming, a
          pre-existing condition may be discovered which you may not be aware
          of. You will be notified of this so that you can seek veterinary
          advice. <br /> <br /> Although extremely unlikely, accidents can
          happen during grooming. In the event of an accident or serious medical
          issue arising during your dog’s groom, the agreement to these terms
          mean you authorise us to seek veterinary treatment. <br /> <br /> The
          groomer will not be held liable or responsible for irritation,
          abrasion, patchiness or coat loss due to any pre-existing skin
          condition. The groomer will not be held liable or responsible for
          irritation, abrasion, patchiness or coat loss due to the process of
          grooming, de-matting, thinning, stripping or shaving or any mishap
          caused by non-disclosure of any health condition or behaviour.
        </TermsP>
        <TermsH4>Safety</TermsH4>
        <TermsP>
          I reserve the right not to accept a dog which presents a risk to my
          safety. <br /> <br /> It may be necessary for me to muzzle your dog
          for my safety and theirs too. <br /> <br /> A suitably sized muzzle
          will be chosen allowing your dog to breathe comfortably. <br /> <br />{" "}
          If your dog is accepted for grooming and displays aggression that we
          have not been informed of during its session, the groom will be
          terminated immediately and you will be contacted and asked to collect
          it. You will be liable to pay the full starting price of the groom
          plus full cost of any damages and expenses your pet has caused.
        </TermsP>
        <TermsH4>Time Keeping</TermsH4>
        <TermsP>
          Please be punctual.
          <br /> <br />I work by appointment only and I am a sole groomer, which
          means a no show is lost income. <br /> <br /> I offer a free
          appointment text reminder so please let me know if this is something
          you think you would benefit from.
          <br /> <br /> Most grooms take between 1 to 3 hours, but may take
          longer depending on the temperament of your dog and the condition of
          the coat. <br /> <br /> I will contact you when your dog is ready for
          collection. Please do not arrive prior to the time agreed as your
          presence may distract your dog during the finishing stage of the
          groom.
          <br /> <br /> Please contact me if you are running late. If you arrive
          late for an appointment without advanced warning, a £5 charge per 20
          minutes will be added to your bill. <br /> <br /> If you need an
          earlier drop off or a later collection time due to other commitments,
          please discuss this with me at the time of booking and I will do my
          best to accommodate you at no extra charge. I will even offer you
          alternative appointment outside normal salon hours if required.
          <br /> <br /> The same late fee is applied for picking up. I will
          usually give a 15 minute warning before pick up, but do understand
          that traffic and other factors will effect journey time. Giving me an
          ETA will help me out. <br /> <br /> If you incur any of the above fees
          these are payable at the time you collect your dog.
        </TermsP>
        <TermsH4>Cancellations &amp; No Shows</TermsH4>
        <TermsP>
          I am a sole groomer so it is very important should you need to cancel
          an appointment that you give me at least 24 hours notice. This will
          allow me time to re-advertise the appointment. <br /> <br />
          If 24 hours notice is given, the appointment will be rescheduled free
          of charge. <br /> <br />
          If less than 24 hours notice is given, a non-refundable deposit of £10
          must be paid to secure a new appointment slot. <br /> <br />
          If an appointment is missed with no notice, a fee of 50% of the
          service booked must be paid. This will need to be paid before another
          appointment can be booked, plus a non-refundable deposit of £10 must
          be paid to secure a new appointment slot. <br /> <br />
          If you incur any of the above mentioned fees, they must be paid in
          full before I can book your dog’s next appointment.
        </TermsP>
        <TermsH4>Fleas</TermsH4>
        <TermsP>
          As a dog owner I know how annoying (and embarrassing) fleas can be!{" "}
          <br /> <br />
          It is recommended that dog owners follow a flea treatment program and
          regularly treat their dog for fleas, and therefore I do expect dogs
          entering the salon to be flea-free. <br /> <br />
          However, I know this can be difficult. <br /> <br />
          If I find fleas on your dog during the initial consultation, I will
          alert you and use a flea shampoo. <br /> <br />
          The flea shampoo is a natural product (therefore suitable for all dog
          skin types) and kills all fleas on the dog, however there may be fleas
          in your home. I recommend after their dog has been washed with flea
          shampoo, owners flea treat their home.
        </TermsP>
        <TermsH4>Neglected &amp; Matted Coats</TermsH4>
        <TermsP>
          Scruffs 2 Crufts have a de-matting policy. <br /> <br />
          Any humane de–matting will be undertaken solely at my discretion in
          accordance with the Animal Welfare Act 2006 (Clause 5 - Animals are to
          be protected from pain, injury and suffering). I will only do this
          once and as long as your dog is in no pain, for a maximum of twenty
          minutes. <br /> <br />
          You agree to pay an extra charge on completion, on top of the full
          groom price. You will be advised at the start of the groom of how much
          the approximate extra charge will be. <br /> <br />
          You agree to pay all costs for the grooming of the dog including
          de-matting which is an extra cost, whether or not I am able to
          complete the job. <br /> <br />
          It is the owner’s duty of care and responsibility to maintain their
          dogs coat between professional grooming sessions. I am happy to offer
          advice on how to look after your dog’s coat and which brushes are most
          suitable. <br /> <br />I DO NOT de-matt puppies, elderly or aggressive
          dogs.
        </TermsP>
        <TermsH4>Style</TermsH4>
        <TermsP>
          Every effort will be made to groom your dog to meet your expectations.
          <br /> <br />
          It must be clear however, that no guarantee can be made and I accept
          no responsibility for the groom carried out according to instructions
          but not to your visual expectations.
          <br /> <br />
          It may take several grooming sessions for the coat to grow to your
          desired style. If you are dissatisfied with any part of your dog’s
          groom please let me know before you leave.
          <br /> <br />
          Reasonable requests to alter the trim will be dealt with immediately
          or changes noted for the next groom.
          <br /> <br />
          If you are dissatisfied with the groom and do not mention before you
          leave but let me know in the days following the groom, I will not make
          any changes. Instead, a following appointment must be booked to make
          the corrections, which the client will pay as £20 per hour.
        </TermsP>
      </TermsWrapper>
    </TermsContainer>
  );
};

export default terms;
