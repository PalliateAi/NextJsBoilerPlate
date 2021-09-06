import React from "react";
import styled from "styled-components";

const PolicyContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  display: inline-block;
`;

const PolicyWrapper = styled.div`
  z-index: 1;
  height: 860px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const PolicyH1 = styled.h1`
  color: #000;
  margin-top: 8rem;
  text-align: center;
`;

const PolicyP = styled.p`
  color: #000;
`;

const policy = () => {
  return (
    <PolicyContainer>
      <PolicyWrapper>
        <PolicyH1>De-matting Policy</PolicyH1>
        <PolicyP>
          We groom humanely at Scruffs 2 Crufts and we abide by the Animal
          Welfare Act 2007.
          <br />
          <br />
          Sometimes it is necessary for a severely matted coat to be shaved off
          completely with a close blade, if the matts are tight and close to the
          skin it would be extremely distressing for the dog to be ‘dematted’,
          and ultimately, at Scruffs 2 Crufts, the dogs’ wellbeing is always
          paramount.
          <br />
          <br />
          Many dogs are traumatised by unnecessary hours of de-matting, putting
          them off grooming for life. Shaving your dog is by far the kindest
          thing to do if the coat is heavily matted.
          <br />
          <br />
          If we find your pet to be matted once we have started grooming we will
          contact you to inform you that we intend to shave your dog. If we
          can’t get hold of you we will shave the dog, in the interests of
          welfare. Please see Client Consent Form.
          <br />
          <br />
          In this case, our aim would be to work together with you and your dog
          as the coat regrows (and they do, very quickly!), to ensure we
          maintain a healthy new, matt free coat.
          <br />
          <br />
          A matted coat can cause many nasty infections and infestations, for
          example: <br /> <br />
          Hotspots &amp; sores <br />
          Fungal &amp; bacterial infections <br />
          Yeast infection <br />
          Moist eczema <br />
          Mites &amp; lice <br />
          Urine &amp; faecal scalding <br />
          Eye and ear infections <br />
          Severe itching
          <br /> <br />
          Once the coat is removed, the skin can be red due to the lack of air
          circulation and dirt that has accumulated underneath. Occasionally
          there are sores or infection, this may need veterinary treatment. Dogs
          tend to scratch and this may lead to broken skin. If in doubt, please
          speak to your vet. <br /> <br />
          Please note: our normal grooming charge does not include de-matting
          dog&#39;s, this may be charged for at an extra cost, usually £10 if
          your dog is matted. This can be higher depending on the extent of the
          condition. <br /> <br />
          We are more than happy to offer advice on keeping your dog’s coat matt
          free. It can be difficult to maintain a dog’s coat, particularly low
          shedding coats, like the very popular poodle crosses. However, with
          grooming at home, and regular visits to the salon it can be done. It
          is essential for the wellbeing of your dog.
        </PolicyP>
      </PolicyWrapper>
    </PolicyContainer>
  );
};

export default policy;
