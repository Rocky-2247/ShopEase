import React, { useState, useEffect } from 'react';
import { Users, Search, ShieldCheck, UserX, UserCheck, ShieldAlert } from 'lucide-react';
import { adminAPI } from '../../services/api';
import { Loader } from '../../components/common/Loader';
import { useToast } from '../../context/ToastContext';

export const AdminUsers = () => {
  const { showToast } = useToast();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('all');

  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await adminAPI.getUsers({ search, role, limit: 50 });
      if (res.data.success) {
        setUsers(res.data.data.users);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [search, role]);

  const handleToggleBlock = async (user) => {
    try {
      const res = await adminAPI.toggleBlockUser(user.id);
      if (res.data.success) {
        showToast(res.data.message, user.is_blocked ? 'success' : 'warning');
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, is_blocked: !u.is_blocked } : u))
        );
      }
    } catch (err) {
      showToast(err.message || 'Failed to update user status', 'error');
    }
  };

  const handleToggleRole = async (user) => {
    try {
      const res = await adminAPI.toggleUserRole(user.id);
      if (res.data.success) {
        showToast(res.data.message, 'success');
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, role: u.role === 'admin' ? 'customer' : 'admin' } : u))
        );
      }
    } catch (err) {
      showToast(err.message || 'Failed to change user role', 'error');
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Customer & User Accounts</h1>
        <p className="text-xs text-slate-400 mt-1">Manage user roles, elevate administrator privileges, and enforce account security.</p>
      </div>

      {/* Filter bar */}
      <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex-1 max-w-md relative flex items-center">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5" />
          <input
            type="text"
            placeholder="Search by customer name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-600"
          />
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-300 outline-none cursor-pointer"
        >
          <option value="all">All Roles</option>
          <option value="customer">Customers Only</option>
          <option value="admin">Administrators Only</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12"><Loader text="Loading user directory..." /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900/60 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">User</th>
                  <th className="py-4 px-4">Phone</th>
                  <th className="py-4 px-4">Role</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4">Joined</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center">
                          {u.name?.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-white">{u.name}</p>
                          <p className="text-[10px] text-slate-500">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{u.phone || '—'}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                        u.role === 'admin' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' : 'bg-slate-900 text-slate-400'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        u.is_blocked ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      }`}>
                        {u.is_blocked ? 'Blocked' : 'Active'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td className="py-3.5 px-6 text-right space-x-2">
                      <button
                        onClick={() => handleToggleRole(u)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 rounded-xl text-indigo-400 hover:text-white font-bold transition-colors"
                        title="Toggle role"
                      >
                        {u.role === 'admin' ? 'Demote' : 'Make Admin'}
                      </button>

                      <button
                        onClick={() => handleToggleBlock(u)}
                        className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                          u.is_blocked
                            ? 'bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900'
                            : 'bg-rose-950/60 text-rose-400 hover:bg-rose-900'
                        }`}
                        title="Toggle account block status"
                      >
                        {u.is_blocked ? 'Unblock' : 'Block'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
