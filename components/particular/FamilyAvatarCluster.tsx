"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "@/lib/motion";

interface Member {
  name: string;
  color: string;
  nextEvent?: string;
}

interface FamilyAvatarClusterProps {
  members: Member[];
  size?: number;
  showCount?: boolean;
  label?: string;
}

export function FamilyAvatarCluster({
  members,
  size = 40,
  showCount = false,
  label,
}: FamilyAvatarClusterProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const overlap = 12;

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center" style={{ height: size }}>
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            className="relative flex-shrink-0"
            style={{ marginLeft: i === 0 ? 0 : -overlap, zIndex: hoveredIdx === i ? 20 : members.length - i }}
            initial={{ opacity: 0, y: 12, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, ...ease.bounce }}
            onHoverStart={() => setHoveredIdx(i)}
            onHoverEnd={() => setHoveredIdx(null)}
          >
            {/* Avatar */}
            <motion.div
              className="flex items-center justify-center rounded-full border-2 border-background font-display font-bold text-white select-none cursor-default"
              style={{
                width: size,
                height: size,
                backgroundColor: member.color,
                fontSize: size * 0.38,
              }}
              animate={{ scale: hoveredIdx === i ? 1.2 : 1 }}
              transition={{ duration: 0.2, ...ease.spring }}
            >
              {member.name[0].toUpperCase()}
            </motion.div>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIdx === i && member.nextEvent && (
                <motion.div
                  className="absolute bottom-full left-1/2 mb-2 z-30 whitespace-nowrap rounded-lg bg-surface-2 border border-border px-3 py-1.5 text-xs text-text-base shadow-card"
                  style={{ translateX: "-50%" }}
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="block font-medium text-text-base">{member.name}</span>
                  <span className="text-text-muted">{member.nextEvent}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {showCount && members.length > 3 && (
          <motion.div
            className="flex items-center justify-center rounded-full border-2 border-background bg-surface-2 text-text-muted font-body text-xs font-medium flex-shrink-0"
            style={{ width: size, height: size, marginLeft: -overlap }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: members.length * 0.1, ...ease.bounce }}
          >
            +{members.length - 3}
          </motion.div>
        )}
      </div>

      {label && (
        <motion.p
          className="text-sm text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: members.length * 0.1 + 0.1 }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}
