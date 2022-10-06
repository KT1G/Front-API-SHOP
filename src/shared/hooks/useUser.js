import { useEffect, useState } from "react";
import { getUserService } from "../services";

export const useUser = (id) => {
    const [profileUser, setProfileUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const loadUser = async () => {
            try {
                setLoading(true)
                setError('')
                const user = await getUserService(id)
                setProfileUser(user)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadUser()
    }, [id])

    return { profileUser, loading, setLoading, error }
}