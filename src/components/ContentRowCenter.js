import React from 'react';
import LastFraganceInDb from './LastFraganceInDb';
import FraganceInDb from './FraganceInDb/FraganceInDb';
function ContentRowCenter(){
    return (
        <div className="row">
         {/*<!-- Last Movie in DB -->*/}
         <LastFraganceInDb/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <FraganceInDb />
        </div>
    )
}

export default ContentRowCenter;