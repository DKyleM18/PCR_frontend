import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                fetchpriority="high"
                sizes="196px"
                srcSet="https://static.wixstatic.com/media/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png/v1/crop/x_0,y_759,w_8001,h_2987/fill/w_196,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png 1x, https://static.wixstatic.com/media/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png/v1/crop/x_0,y_759,w_8001,h_2987/fill/w_392,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png 2x"
                id="img_comp-lshxnuno"
                src="https://static.wixstatic.com/media/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png/v1/crop/x_0,y_759,w_8001,h_2987/fill/w_196,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d75b1_f1112c5d05864fa09d651f8b248fcec3~mv2.png"
                alt='An illustration of a cat sitting in a crescent moon and a star within a cloud with the text "PCR".'
                style={{ objectFit: "cover" }}
                className="BI8PVQ Tj01hh"
                width="196"
                height="77"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
