import useAuth from "../../shared/hooks/useAuth";
import useOwner from "../../shared/hooks/useOwner";

export const ProfileInfo = () => {
    const { user } = useAuth();
    //recuperar el ownerUser del useOwner
    const { ownerUser, loading, error } = useOwner()
    console.log('ownerUser', ownerUser);

    
    return (
        <div className="page__container">{ownerUser.name}</div>
    );
}