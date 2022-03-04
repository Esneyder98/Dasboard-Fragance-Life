import React from "react";
import LastFraganceInDb from "./LastFraganceInDb/LastFraganceInDb";
import GenresInDb from "./GenresInDb/GenresInDb";
function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <LastFraganceInDb />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <GenresInDb />
    </div>
  );
}

export default ContentRowCenter;
