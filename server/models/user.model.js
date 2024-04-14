import supabase from '../data-base/db_client.js';
/* import UserSchema from '../squemas/user.squemas.js';
 */

const getUsers = async () => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');
            
        if (error) {
            throw new Error(error.message);
        }
        
        return data;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
};

const searchUser = async (userId) => {
    try {
        const { data, error } = await supabase()
            .from('users')
            .select('*')
            .eq('id', userId);
        let user = data[0];
        console.log('User:', user);
        if (error) {
            throw new Error(error.message);
        }
        
        return user;
    } catch (error) {
        console.error('Error searching user:', error);
        throw error;
    }
};

const createUser = async (data) => {
    const user = data;
    const { error } = await supabase().
    from('users').insert(user);
  
    if (error) {
      throw new Error(error.message);
    }
    return user;
  };
export {getUsers, searchUser, createUser};